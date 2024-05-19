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
    const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log(result);
});
const insertUsersData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const query = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
        const values = ["usr", "jfsa@example2.com", "ljkasfdlksjaf"];
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
const displayusersData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const query = "Select * from users";
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
// insertUsersData();
// displayusersData().catch(console.error);
// createUsersTable();
const craeteAddressTable = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
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
    const values = [];
    const address = yield client.query(query, values);
    console.log(address);
});
const insertAddressesData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const query = `INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES ($1, $2, $3, $4, $5);`;
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
const getMixedTableData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const query = `SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
            FROM users u
            JOIN addresses a ON u.id = a.user_id
            WHERE u.id = $1;`;
        const values = [1];
        const data = yield client.query(query, values);
        console.log(data.rows);
    }
    catch (err) {
        throw err;
    }
    finally {
        yield client.end();
    }
});
// insertAddressesData();
// displayAddressesData().catch(console.error);
// craeteAddressTable();
getMixedTableData();
