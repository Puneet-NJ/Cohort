import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
	username: string,
	password: string,
	name: string
) {
	try {
		// await client.connect();

		const insertQuery = `INSERT INTO users (username, password, name) VALUES ($1, $2, $3);`;
		const values = [username, password, name];

		const response = await client.query(insertQuery, values);
		console.log(response);

		return { username, password, name };
	} catch (err) {
		throw new Error("Error: " + err);
	}
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
	try {
		// await client.connect();

		const getQuery = "SELECT * FROM users WHERE id = $1";
		const values = [userId];

		const response = await client.query(getQuery, values);

		return response;
	} catch (err) {
		throw new Error("Error:" + err);
	}
}
