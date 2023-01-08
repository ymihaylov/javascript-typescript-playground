// "There should never be more than one reason for a class to change."

// === Bad example
// class Book {
//     public title: string;
//     public author: string;
//     public description: string;
//     public pages: number;

//     constructor(t: string, a: string, d: string, p: number) {
//         this.title = t;
//         this.author = a;
//         this.description = d;
//         this.pages = p;
//     }

//     public saveToFile(): void {
//         // some fs.write method to save book to file
//         // bad, bad, bad! 
//         // two reasons of the class - two purposes
//     }
// }


// === Good example
class Book {
    public title: string;
    public author: string;
    public description: string;
    public pages: number;

    constructor(t: string, a: string, d: string, p: number) {
        this.title = t;
        this.author = a;
        this.description = d;
        this.pages = p;
    }
}

class Persistence {
    public saveToFile(book: Book): void {
        
    }
}
