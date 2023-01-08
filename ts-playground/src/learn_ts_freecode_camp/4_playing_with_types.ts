// === TypeScript automatically infers the type of a variable (type inference)
// let hasDog = true;
// hasDog = "false"; // ERROR, TypeScript knows hasDog is boolean

// === Union types
// let age: number | string;
// age = 5;
// age = "5";


// === Dynamic (any) types
// Using the any type, we can basically revert back into JavaScript
// let age: any = '100';
// age = 100 // no problem, because of any
// age = {
//     years: 100,
//     months: 2
// };

// It's recommended to avoid any type

// === Type Aliases
type StringOrNumber = string | number;

type PersonObject = {
    name: string;
    id: StringOrNumber;
    // func: () => void
};

const person1: PersonObject = {
    name: "Yavor",
    id: 1,
};

const person2: PersonObject = {
    name: "Kali",
    id: 2
};

const sayHello = (person: PersonObject): string => {
    return `Hello ${person.name}`;
};

// ==== The DOM and type casting
// Here we are telling TypeScript that we are certain that this anchor tag exists
// const link = document.querySelector('a')!; // !

// In this case we need to tell TS that we are certain form exists and that we know it is of type HTMLFormElement
// const form = document.getElementById('signup-form') as HTMLFormElement;
// console.log(form.method);

