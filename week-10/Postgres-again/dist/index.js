"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = require("./config");
const client = new pg_1.Client({
    connectionString: config_1.connectionString,
});
const createUsersTable = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const result = yield client.query(`CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`);
    console.log(result);
});
const insertIntoTable = (username, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const insertQuery = "INSERT INTO users2 (username, email, password) VALUES ($1, $2, $3);";
        const values = [username, email, password];
        const result = yield client.query(insertQuery, values);
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        yield client.end();
    }
});
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const query = "SELECT * FROM users2 WHERE email = $1";
        const values = [email];
        const result = yield client.query(query, values);
        if (result.rows.length > 0) {
            console.log("User found:", result.rows[0]); // Output user data
            return result.rows[0]; // Return the user data
        }
        else {
            console.log("No user found with the given email.");
            return null; // Return null if no user was found
        }
    }
    catch (err) {
        console.error("Error during fetching user:", err);
        throw err; // Rethrow or handle error appropriately
    }
    finally {
        yield client.end(); // Close the client connection
    }
});
// createUsersTable();
insertIntoTable("username22", "user3@example.com", "user_password");
// getUser("user3@example.com");
const createAddressTable = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const query = `CREATE TABLE addresses2 (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );`;
    yield client.query(query);
});
const insertIntoAddressTable = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const query = `INSERT INTO addresses2 (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5);`;
        const values = [1, "New York", "USA", "123 Broadway St", "10001"];
        const insert = yield client.query(query, values);
        console.log(insert);
    }
    catch (err) {
        console.log("Error during insertion: " + err);
    }
    finally {
        yield client.end();
    }
});
const displayAddressesData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const query = "Select * from addresses";
        const values = [];
        const users = yield client.query(query, values);
        console.log(users.rows);
    }
    catch (err) {
        // console.error("Error during fetching user:", err);
        throw err; // Rethrow or handle error appropriately
    }
    finally {
        yield client.end(); // Close the client connection
    }
});
// createAddressTable();
// insertIntoAddressTable();
// displayAddressesData();
