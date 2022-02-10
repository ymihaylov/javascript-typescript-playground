// === Dynamic (any) types
// Using the any type, we can basically revert back into JavaScript
let age: any = '100';
age = 100 // no problem, because of any
age = {
    years: 100,
    months: 2
};

// It's recommended to avoid any type


// === Type aliases
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
// Here we are telling TypeScript tht we are certain that this anchor tag exists
// const link = document.querySelector('a')!; // !

// In this case we need to tell TS that we are certain form exists and that we know it is of type HTMLFormElement
const form = document.getElementById('signup-form') as HTMLFormElement;
console.log(form.method);
