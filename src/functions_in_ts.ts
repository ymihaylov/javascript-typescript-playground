// ==== Functions 101
// parameter strict type and return type
// function circle(diameter: number): string {
//     return `The circumference is ${Math.PI * diameter}`;
// }

// console.log(circle(5));


// === Same function, but with an ES6 arrow function
// const circle = (diameter: number): string => {
//     return `The circumference is ${Math.PI * diameter}`;
// };


// === Infered return types
// const sayHello = (name: string) => {
//     return `Hello World, ${name}!`;
// };

// let helloYavor: string = sayHello("Yavor");
// console.log(helloYavor);

// let helloError: number = sayHello("Error"); // ERROR! TypeScript knows that sayHello function return string


// === Infered return types - different types test
// const isEven = (digit: number) => {
//     if (digit % 2 === 0) {
//         return "YES!";
//     }

//     return false;
// };

// let str: string = isEven(2); // ERROR! string | boolean is not assignable to type string


// === Optional parameters
// const add = (a: number, b: number, c?: number| string) => {
//     console.log(c);    
// };

// add(1, 2); // undefined
// add(1, 2, "hello"); // hello


// === Default values
// const add = (a: number, b: number, c: number = 100): void => {
//     console.log(a + b + c);
// };


// let p: number | void = add(1, 2); // Function doesn't return anything!


// === Declare function variable and define later
let sayHello: (name: string) => void;
sayHello = (name: string) => {
    console.log("Hello World, " + name);
};

sayHello("Yavor");
