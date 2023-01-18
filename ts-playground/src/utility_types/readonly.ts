interface TodoReadOnlyExample {
	title: string;
}

const todo: Readonly<TodoReadOnlyExample> = {
	title: "Delete inactive users",
};

// todo.title = "Hello World!"; // Error - object is readonly
