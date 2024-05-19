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

const insertUsersData = async () => {
	try {
		await client.connect();

		const query =
			"INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
		const values = ["usr", "jfsa@example2.com", "ljkasfdlksjaf"];
		const insert = await client.query(query, values);
		console.log(insert);
	} catch (err) {
		console.log("Error during insertion: " + err);
	} finally {
		await client.end();
	}
};

const displayusersData = async () => {
	try {
		await client.connect();
		const query = "Select * from users";
		const values: any[] = [];
		const users = await client.query(query, values);
		console.log(users.rows);
	} catch (err) {
		// console.error("Error during fetching user:", err);
		throw err; // Rethrow or handle error appropriately
	} finally {
		await client.end(); // Close the client connection
	}
};

// insertUsersData();
// displayusersData().catch(console.error);
// createUsersTable();

const craeteAddressTable = async () => {
	await client.connect();
	const query = `CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );`;
	const values: any[] = [];

	const address = await client.query(query, values);
	console.log(address);
};

const insertAddressesData = async () => {
	try {
		await client.connect();

		const query = `INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES ($1, $2, $3, $4, $5);`;
		const values = [1, "New York", "USA", "123 Broadway St", "10001"];
		const insert = await client.query(query, values);
		console.log(insert);
	} catch (err) {
		console.log("Error during insertion: " + err);
	} finally {
		await client.end();
	}
};

const displayAddressesData = async () => {
	try {
		await client.connect();
		const query = "Select * from addresses";
		const values: any[] = [];
		const users = await client.query(query, values);
		console.log(users.rows);
	} catch (err) {
		// console.error("Error during fetching user:", err);
		throw err; // Rethrow or handle error appropriately
	} finally {
		await client.end(); // Close the client connection
	}
};

const getMixedTableData = async () => {
	try {
		await client.connect();
		const query = `SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1;`;
		const values = [1];

		const data = await client.query(query, values);
		console.log(data.rows);
	} catch (err) {
		throw err;
	} finally {
		await client.end();
	}
};

// insertAddressesData();
// displayAddressesData().catch(console.error);
// craeteAddressTable();
getMixedTableData();
