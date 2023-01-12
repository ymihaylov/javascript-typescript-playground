import { ProjectError } from "./errors";

// === throwing a custom error
type Response = {
	data?: string[],
	error?: string
};

class Api {
	createProject(): Response {
		console.log("Creating project ...")

		return {
			data: ['Project 1', 'Project 2']
		};

		// return {
		// 	error: "We have an error"
		// };
	}
}

const PROJECTS_LIMIT = 1;

export function createProject() {
	console.log("Here!");
	const api = new Api;
	const { data, error } = api.createProject();

	if (error) {
		throw new ProjectError(
			'CREATE_PROJECT_ERROR',
			'API error occurred',
			error
		);
	}

	if (data && data.length > PROJECTS_LIMIT) {
		throw new ProjectError(
			'PROJECT_LIMIT_REACHED',
			'Project limit has been rached.'
		);
	}

	console.log(`Everything is successful! Projects: ${data}`);
}

try {
	createProject();
} catch (error) {
	if (error instanceof ProjectError) {
		console.log(error.message);
	}
}

