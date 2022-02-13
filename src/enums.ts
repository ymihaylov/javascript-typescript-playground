// === Enums 101
// enum ResourceType {
//     BOOK,
//     AUTHOR,
//     FILM,
//     DIRECTOR,
//     PERSON
// }

// console.log(ResourceType.BOOK); // 0
// console.log(ResourceType.AUTHOR); // 1


// === Enum with different initializers
// enum ResourceType {
//     BOOK = 'a',
//     AUTHOR = 'b',
//     FILM = 'c',
//     DIRECTOR = 'd',
//     PERSON = 'e'
// }


// === Enum starts with 1
enum ResourceType {
    BOOK = 1,
    AUTHOR,
    FILM,
    DIRECTOR,
    PERSON
}

console.log(ResourceType);
