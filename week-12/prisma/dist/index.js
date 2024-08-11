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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const userInsert = (username, password, firstName, lastName) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.user.create({
        data: { username, password, firstName, lastName },
    });
    console.log(response);
});
// userInsert("username2", "passowrd2", "fname2", "lname2");
const createTodo = (title, description, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.todos.create({
        data: {
            title,
            description,
            userId,
        },
    });
    console.log(response);
});
// createTodo("Title2", "Description2", 1);
const getTodos = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.todos.findFirst({
        where: {
            userId,
        },
    });
    console.log(response);
});
// getTodos(1);
const getTodosAndUserDetails = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.todos.findMany({
        where: {
            userId,
        },
        select: {
            title: true,
            description: true,
            done: true,
            user: true,
        },
    });
    console.log(response);
});
getTodosAndUserDetails(1);
