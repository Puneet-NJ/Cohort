import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
	userId: number,
	title: string,
	description: string
) {
	try {
		const createQuery =
			"INSERT INTO todos (userId, title, description) VALUES ($1, $2, $3)";
		const values = [userId, title, description];

		const response = await client.query(createQuery, values);
		console.log(response);

		return { title, description, done: false, userId };
	} catch (err) {
		throw new Error("Error: " + err);
	}
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
	try {
		const updateQuery = "UPDATE users SET done = true WHERE id = $1";
		const values = [todoId];

		const response = await client.query(updateQuery, values);
		console.log(response);

		return response;
	} catch (err) {
		throw new Error("Error: " + err);
	}
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
	try {
		const getQuery = "SELECT * FROM todos WHERE userId = $1";
		const values = [userId];

		const response = await client.query(getQuery, values);
		console.log(response);

		return response;
	} catch (err) {
		throw new Error("Error: " + err);
	}
}
