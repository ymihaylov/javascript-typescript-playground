interface TodoOmitExample {
	title: string;
	description: string;
	completed: boolean;
	createdAt: number;
}

type TodoPreviewOmitExample = Omit<TodoOmitExample, "description">;

const todoOmit: TodoPreviewOmitExample = {
	title: "Clean room",
	completed: false,
	createdAt: 5,
};

console.log(todoOmit);

type TodoInfo = Omit<TodoOmitExample, "completed" | "createdAt">

const todoInfo: TodoInfo = {
	title: "Pick up kids",
	description: "Kindergaten closes at 5pm"
};

console.log(todoInfo);
