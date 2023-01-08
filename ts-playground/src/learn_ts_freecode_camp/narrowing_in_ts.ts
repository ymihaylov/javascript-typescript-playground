// === Narrowing
// In TS, a variable can move from a less precise type to a more precise type.
// This process is called type narrowing

// function addAnother(val: string | number) {
//     if (typeof val === 'string') {
//         // TS treats val as string in this block
//         return val.concat(' ' + val);
//     }

//     return val  + val; // TS knows val is number here. Doesn't allow to use str methods
// }

// console.log(addAnother('Woo')); 
// console.log(addAnother(1));


// === Another example
interface Vehicle {
    topSpeed: number;
}

interface Train extends Vehicle {
    type: 'Train';
    carriages: number;
}

interface Plane extends Vehicle {
    type: 'Plane';
    wingSpan: number;
}

type PlaneOrTrain = Plane | Train;

function getSpeedRation(v: PlaneOrTrain) {
    if (v.type === 'Train') {
        // TS knows this is a Train. It has narrowed down the type from the less specific Plane | Train type into more specific Train type
        return v.topSpeed / v.carriages;
    }

    // if it's not a train, ts narrows down that v must be a plane - smart
    return v.topSpeed / v.wingSpan; // autocomplete, duh
}

let bigTrain: Train = {
    type: 'Train',
    carriages: 20,
    topSpeed: 100
};

console.log(getSpeedRation(bigTrain));
