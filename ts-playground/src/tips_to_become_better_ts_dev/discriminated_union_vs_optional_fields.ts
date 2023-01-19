{

// dummy solution - optional fields
// type Shape = {
// 	kind: 'circle' | 'rect';
// 	radius?: number;
// 	width?: number;
// 	height?: number;
// };

enum ShapeTypes {
	CIRCLE = 'circle',
	RECT = 'rect',
};

type Circle = { kind: ShapeTypes.CIRCLE; radius: number };
type Rect = { kind: ShapeTypes.RECT; width: number; height: number };

type Shape = Circle | Rect;

function getArea(shape: Shape) {
	return shape.kind === ShapeTypes.CIRCLE ?
		Math.PI * shape.radius! ** 2
		: shape.width! * shape.height!;
}

const rect: Rect = {
	kind: ShapeTypes.RECT,
	width: 10,
	height: 20,
};

console.log(getArea(rect));

// ==== Use type predicate to avoid type assertion
function getShapes(): Shape[] {
	return [
		{
			kind: ShapeTypes.RECT,
			width: 10,
			height: 20,
		},
		{
			kind: ShapeTypes.CIRCLE,
			radius: 5,
		},
	];
}

function isCircle(shape: Shape): shape is Circle {
	return shape.kind === ShapeTypes.CIRCLE;
}

function isRect(shape: Shape): shape is Rect {
	return shape.kind === ShapeTypes.RECT;
}

const myShapes: Shape[] = getShapes();
const circles: Circle[] = myShapes.filter(isCircle);

console.log(circles);
}
