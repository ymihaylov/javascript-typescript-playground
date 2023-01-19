{
enum ShapeTypes {
	CIRCLE = 'circle',
	RECT = 'rect',
	TRAPEZOID = 'trapezoid',
};

type Circle = { kind: ShapeTypes.CIRCLE; radius: number };
type Rect = { kind: ShapeTypes.RECT; width: number; height: number };
type Trapezoid = { kind: ShapeTypes.TRAPEZOID; width: number; height: number };

type Shape = Circle | Rect | Trapezoid;

function getArea(shape: Shape) {
	switch (shape.kind) {
		case ShapeTypes.CIRCLE:
			return Math.PI * shape.radius ** 2;
		case ShapeTypes.RECT:
			return shape.width * shape.height;
		default:
			// const _exhaustiveCheck: never = shape; // Catch unhandled case - trapezoid is not assignable to never
			throw new Error("Unknown shape kind");
	}
}

getArea({kind: ShapeTypes.TRAPEZOID, width: 50, height: 20});
}
