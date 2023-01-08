// === Classes 101

// class Person {
//     readonly name: string; // This property is immutable - it can only be read
//     private isCool: boolean; // Can only access or modify from methods within this class
//     protected email: string; // Can access or modify from this class and subclasses
//     public pets: number; // Can access or modify from anywhere

//     constructor(n: string, c: boolean, e: string, p: number) {
//         this.name = n;
//         this.isCool = c;
//         this.email = e;
//         this.pets = p;
//     }

//     sayHello() {
//         return `Hi, my name is ${this.name} and I have ${this.pets} pets.`;
//     }
// }


// === Constructing smart way
class Person {
    constructor(
        readonly name: string,
        private isCool: boolean,
        protected email: string,
        public pets: number
    ) {}

    sayHello() {
        return `Hi, my name is ${this.name} and I have ${this.pets} pets.`;
    }
}


// ==== Extend
// class Programmer extends Person {
//     programmingLanguages: string[];

//     constructor(
//         name: string,
//         isCool: boolean,
//         email: string,
//         pets: number,
//         pL: string[]
//     ) {
//         super(name, isCool, email, pets);
//         this.programmingLanguages = pL;
//     }
// }

// === Examples
// Init objects from class Person
// const person1 = new Person('Danny', false, 'danny@mail.com', 1);
// // person1.name = "Other Danny"; // Error!

// const person2 = new Person('Yavor', true, 'yavor@mail.com', 0);

// // Array of objects of type Person
// let People: Person[] = [person1, person2];
