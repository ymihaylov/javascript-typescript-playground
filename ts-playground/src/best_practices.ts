// https://medium.com/@warkiringoda/typescript-best-practices-2021-a58aee199661

// === 1. Use correct data type annotation (avoid any)

// === 2. Enable strict check on

// === 3. Use let instead of var

// === 4. Use const for constants

// === 5. Use tupples for fixed length arrays

// === 6. Use type aliases in repetitive data type
// The intention of defining the data is now clearly visible


// === 7. Decide between any and unknown
// You can do that with any
// anyExample.you.made.this.code.chain(); // success
// But cannot do it with unknown
// unknownExample.trim(); // syntax error. you have to do it inside a condition block

// unknown is safer

let exampleUnknown: unknown = 'hello'
if (typeof exampleUnknown === 'string') {
    exampleUnknown.toString(); // no syntax error now
}


// === 8. Use access modifiers for class members

// === 9. Avoid unnecessary comments

// === 10. Use linter
// ESLint

// === 11. Use a code formatter