// === Interfaces in TypeScript
// interface Person {
//     name: string;
//     age: number;
// }

// const sayHi = (person: Person) => {
//     console.log(`Hi ${person.name}!`);
// };

// sayHi({
//     name: "Yavor",
//     age: 26
// });


// === Define with Object Type
// type Person = {
//     name: string;
//     age: number;
// };

// const sayHi = (person: Person) => {
//     console.log(`Hi ${person.name}!`);
// };

// sayHi({
//     name: "Yavor",
//     age: 26
// });


// === Object type could be defined anonymously
// const sayHi = (person: {name: string; age: number}) => {
//     console.log(`Hi ${person.name}!`);
// };

// sayHi({
//     name: "Yavor",
//     age: 26
// });


// === Interfaces vs Types
// In many cases you can use either.
// The key distinction is that type aliases cannot be reopened to add new properties
// Interfaces are extendable
// Types cannot be changed after being created
// Interfaces also can define function signutures
// As a rule of thumb, the TypeScript docs recommend using interfaces to defind objects, until you need to use the feautures of a type


// === Interface extension
// interface Animal {
//     name: string
// }

// interface Bear extends Animal {
//     honey: boolean
// }

// const bear: Bear = {
//     name: "Winnie",
//     honey: true
// }


// === Exntedning a type via intersections
// type Animal = {
//     name: string
// }

// type Bear = Animal & {
//     honey: boolean
// }

// const bear: Bear = {
//     name: "Winnie",
//     honey: true
// }


// === Adding new fields to an existing interface
// interface Animal {
//     name: string
// }

// // Re-opening the Animal interface to add a new field
// interface Animal {
//     tail: boolean
// }

// const dog: Animal = {
//     name: "Bruce",
//     tail: true
// }


// === Interface function signatures
// Interface is only used by TypeScript, not JavaScript. This means that it won't get compiled and add bloat to JS. 
// Classes are features of JavaScript, so it would get compiled
// Classes are blueprints, interfaces are structures that used solely for type-checking
// interface Person {
//     name: string;
//     age: number;
//     speak(sentence: string): void
// }


// const person1: Person = {
//     name: "John",
//     age: 48,
//     speak: sentence => console.log(sentence)
// }


// === Implementing interfaces
interface HasFormatter {
    format(): string;
}

class Person implements HasFormatter {
    constructor(
        public username: string,
        protected password: string
    ) {}

    format = () => {
        return this.username.toLocaleLowerCase()
    };
}

// Must be objects that implement the HasFormatter
let person1: HasFormatter,
    person2: HasFormatter;

person1 = new Person('Danny', '1234');
person2 = new Person('Yavor', 'qwerty');

console.log(person1.format());

// Ensure people is an array of objects implement HasFormatter
let people: HasFormatter[] = [];
people.push(person1);
people.push(person2);
// people.push(1); // Error!

console.log(people);