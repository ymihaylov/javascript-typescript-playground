// “Software entities … should be open for extension, but closed for modification.”

// === Bad example - code agianst Open/close principle
// class Rectangle {
//     public width: number = 10;
//     public height: number = 8;
// }

// class Circle {
//     public radius: number = 5;
// }

// class AreaCalculator {
//     public calculateRectangleArea(rectangle: Rectangle): number {
//         return rectangle.width * rectangle.height;
//     }

//     public calculateCircleArea(circle: Circle): number {
//         return Math.PI * (circle.radius * circle.radius);
//     }

//     // If you add one more shape, you should add one more method - sucks.
// }


// === Good Example
interface Shape {
    calculateArea(): number;
}

class Rectangle implements Shape {
    public width: number = 10;
    public height: number = 8;

    public calculateArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Shape {
    public radius: number = 5;

    public calculateArea(): number {
        return Math.PI * (this.radius * this.radius);
    }
}


class AreaCalculator {
    public calculateArea(shape: Shape): number {
        return shape.calculateArea();
    }
}
