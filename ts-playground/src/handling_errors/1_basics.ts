// In JavaScript, just about anything can be thrown
// throw 'oops';
// throw 210;
// throw null;
// throw undefined
// throw {message: 'you get the idea'}

// The error in try catch block is truly unknown


// === Basic
// Most common errors:
// - ReferenceError — The code referenced a variable that doesn’t exist.
// - TypeError — A value wasn’t the expected type.
// - SyntaxError — The code was syntactically invalid.

// === Throwing errors
type User = {
	id: number,
	username: string,
};

type Project = {
	id: number,
	userId: number,
	name: string,
};

function createProject() {
	const user = getUser();

	if (!user) {
		throw new ReferenceError('User is null/undefined');
	}

	saveProject({id: 1, name: 'My Project', userId: user?.id});
}

function getUser(): User | null {
	// return null;
	return {
		id: 1,
		username: 'Yavor',
	}
}

function saveProject(project: Project) {
	console.log("Saving project: ", project);
}

try {
	createProject();
} catch (error) {
	// Narrowing the type of errro
	if (error instanceof ReferenceError) {
		console.error(error);
	}
}

// Once an error is throw, it will bubble up the callstack until caught in a try/catch statement


