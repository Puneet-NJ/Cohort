"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const todo_1 = require("../controllers/todo");
const userAuth_1 = require("../middleware/userAuth");
exports.todoRouter = (0, express_1.default)();
exports.todoRouter.post("/addTodo", userAuth_1.userAuth, todo_1.addTodo);
