// === Generics
// Create a component that can work over a variety of types

// const addID = (obj: object) => {
//     let id = Math.floor(Math.random() * 1000);

//     return {...obj, id};
// };

// let person1 = addID({ name: 'John', age: 40 });

// console.log(person1.id); // 271
// console.log(person1.name); // ERROR: Property 'name' does not exist on type

// Error appear because TypeScript has no idea what properties the object has (it hasn't captured them).
// TypeScript knows only form id property
// obj: any will fix the issue, but still tell TS wouldn't know the strucutre


// === How to use Generics
// T is only convention
// const addId = <T>(obj: T) => {
//     let id = Math.floor(Math.random() * 1000);

//     return {...obj, id};
// }

// let person1 = addId({ name: 'John', age: 40 });

// console.log(person1.id); // 271
// console.log(person1.name); // It's fine now

// // But we have a problem again - anything can be passed now
// let person2 = addId('Sally'); // Pass string - no problem
// console.log(person2);
// console.log(person2.id); // 271
// console.log(person2.name); // Error: Property name doesn't exists


// === Generics extend
// const addId = <T extends object>(obj: T) => {
//     let id = Math.floor(Math.random() * 1000);

//     return {...obj, id};
// }

// let person1 = addId({name: 'Yavor', age: 30}); // okay - it's an object
// // let person2 = addId('Sally'); // Error, not assignable

// // But we have one more problem
// // Array is also an object
// let person3 = addId(['Sally', 26]);
// console.log(person3);
// console.log(person3.name); // Error! name not exists and undefined


// === Generics with specifying type properties
const addId = <T extends {name: string}>(obj: T) => {
    let id = Math.floor(Math.random() * 1000);

    return {...obj, id};
}

// let person1 = addId(['Sally', 26]); // Error! Not assignable


// === Explicitly stated what type the argument should be. 
// Not necessary most of the time. TypeScript will infer it
let person1 = addId<{name: string, age: number}>({name: 'John', age: 40});


//  === The issue with any
// function logLength(a: any) {
//     console.log(a.length); // No error

//     return a;
// }

// let hello = 'Hello world!';
// logLength(hello); // 11

// let howMany = 8;
// logLength(howMany); // undefined, but surely we want TS to tell us we've tried to access a length property on a number!


// === logLength with generic

// function logLength<T>(a: T) {
//     console.log(a.length); // Error - TS isn't certain that `a` is a value with length property
//     return a;
// }

// Generic labda expression
// let logLength = <T> (a: T) => {

// }


// === Solution - use a generic that extends an interface that ensures every argument passed in has a length property
interface hasLength {
    length: number;
}

let logLength = <T extends hasLength>(a: T) => {
    console.log(a.length);
    return a;
}

let hello = 'Hello World';
logLength(hello);

let howMany = 8;
// logLength(howMany); // Error, number doesn't have length property

// Function where the argument is an arrray of elements that all have length property
let logLengths = <T extends hasLength>(a: T[]) => {
    a.forEach((element) => {
        logLength(element);
    });
};

let list = [
    'This string has a length prop',
    ['This', 'arr', 'has', 'length'],
    {material: 'plastic', length: 30}
];

logLengths(list);
