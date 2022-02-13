// === Generics with interfaces
// When we don't know what the type a certain value in an object will be ahead of time, we can use a generic to pass in the type

// The type, T, will be passed in
interface Person<T> {
    name: string;
    age: number;
    documents: T;
}

const person1: Person<string[]> = {
    name: 'Yavor',
    age: 30,
    documents: ['passport', 'bank statement', 'visa']
};

const person2: Person<string> = {
    name: 'Dalia',
    age: 46,
    documents: 'passport, P45'
};
