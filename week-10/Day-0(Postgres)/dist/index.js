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
const client = new pg_1.Client({
    connectionString: "postgresql://Puneet-NJ:vUDl6Pnzq5cp@ep-shiny-wildflower-53587449.us-east-2.aws.neon.tech/test?sslmode=require",
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
const insertData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insert = yield client.query(`
            INSERT INTO users (username, email, password)
            VALUES ('username_here', 'user@example.com', 'user_password');
        `);
        console.log(insert);
    }
    catch (err) {
        console.log("Error during insertion: " + err);
    }
    finally {
        yield client.end();
    }
});
insertData();
createUsersTable();
