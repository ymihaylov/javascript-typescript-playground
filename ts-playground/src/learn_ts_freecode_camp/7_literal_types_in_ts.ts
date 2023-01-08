// === Literal types
let favouriteColor: 'red' | 'blue' | 'green' | 'yellow' | 1;

favouriteColor = 'blue'; // It's ok
// favouriteColor = 1;
// favouriteColor = 'crimson'; // Error! Type crimson is not assignable of type 'red', blue etc.
