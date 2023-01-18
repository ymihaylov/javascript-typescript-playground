interface TodoPick {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = Pick<TodoPick, "title" | "completed">;

const todoPick: TodoPreview = {
	title: "Clean",
	completed: false,
};

console.log(todoPick);
