import { Client } from "pg";
import { connectionString } from "./config";

const client = new Client({
	connectionString: connectionString,
});

const createUsersTable = async () => {
	await client.connect();

	const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);

	console.log(result);
};

const insertData = async () => {
	try {
		const insert = await client.query(`
            INSERT INTO users (username, email, password)
            VALUES ('username_here', 'user@example.com', 'user_password');
        `);
		console.log(insert);
	} catch (err) {
		console.log("Error during insertion: " + err);
	} finally {
		await client.end();
	}
};

insertData();
createUsersTable();
