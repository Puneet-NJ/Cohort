// write a function to create a users table in your database.
import { Client } from "pg";

const client = new Client({
	connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres",
});

async function createUsersTable() {
	await client.connect();
	const result = await client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
	console.log(result);
}

// createUsersTable();

async function insertData(username: string, email: string, password: string) {
	const client = new Client({
		host: "localhost",
		port: 5432,
		database: "postgres",
		user: "postgres",
		password: "mysecretpassword",
	});

	try {
		await client.connect(); // Ensure client connection is established
		// Use parameterized query to prevent SQL injection
		const insertQuery =
			"INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
		const values = [username, email, password];
		const res = await client.query(insertQuery, values);
		console.log("Insertion success:", res); // Output insertion result
	} catch (err) {
		console.error("Error during the insertion:", err);
	} finally {
		await client.end(); // Close the client connection
	}
}

// Example usage
// insertData("username5", "user5@example.com", "user_password").catch(
// 	console.error
// );

// TRANSACTIONS
async function insertUserAndAddress(
	username: string,
	email: string,
	password: string,
	city: string,
	country: string,
	street: string,
	pincode: string
) {
	try {
		await client.connect();

		// Start transaction
		await client.query("BEGIN");

		// Insert user
		const insertUserText = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id;
        `;
		const userRes = await client.query(insertUserText, [
			username,
			email,
			password,
		]);
		const userId = userRes.rows[0].id;

		// Insert address using the returned user ID
		const insertAddressText = `
            INSERT INTO addresses (user_id, city, country, street, pincode)
            VALUES ($1, $2, $3, $4, $5);
        `;
		await client.query(insertAddressText, [
			userId,
			city,
			country,
			street,
			pincode,
		]);

		// Commit transaction
		await client.query("COMMIT");

		console.log("User and address inserted successfully");
	} catch (err) {
		await client.query("ROLLBACK"); // Roll back the transaction on error
		console.error("Error during transaction, rolled back.", err);
		throw err;
	} finally {
		await client.end(); // Close the client connection
	}
}

// Example usage
insertUserAndAddress(
	"johndoe1",
	"john.doe@example.com1",
	"securepassword1231",
	"New York1",
	"USA1",
	"123 Broadway St",
	"10001"
);
