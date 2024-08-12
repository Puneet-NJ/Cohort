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
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.addTodo = void 0;
const routes_1 = require("../routes");
const client_1 = require("@prisma/client");
const todo_1 = require("../zod/todo");
const prisma = new client_1.PrismaClient();
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const userId = req.id;
        if (!userId)
            return res
                .status(routes_1.STATUS_CODES.INVALID_INPUTS)
                .json({ msg: "No ID found in token" });
        const validInput = todo_1.addTodoSchema.safeParse(body);
        if (!validInput.success)
            return res
                .status(routes_1.STATUS_CODES.INVALID_INPUTS)
                .json({ msg: routes_1.RESPONSE_MESSAGES.INVALID_INPUTS });
        const response = yield prisma.todo.create({
            data: {
                title: body.title,
                description: body.description,
                userId: userId,
            },
        });
        return res.json({ msg: "Todo created successfully", data: response });
    }
    catch (err) {
        return res
            .status(routes_1.STATUS_CODES.INTRENAL_ERROR)
            .json({ msg: routes_1.RESPONSE_MESSAGES.INTRENAL_ERROR });
    }
});
exports.addTodo = addTodo;
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.id;
        if (!userId)
            return res
                .status(routes_1.STATUS_CODES.INVALID_INPUTS)
                .json({ msg: "No ID found in token" });
        const response = yield prisma.todo.findMany({
            where: {
                userId,
            },
        });
        return res.json({ msg: "Got all Todos successfully", data: response });
    }
    catch (err) {
        return res
            .status(routes_1.STATUS_CODES.INTRENAL_ERROR)
            .json({ msg: routes_1.RESPONSE_MESSAGES.INTRENAL_ERROR });
    }
});
exports.getTodos = getTodos;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = parseInt(req.params.id);
        const userId = req.id;
        if (!todoId || !userId)
            return res
                .status(routes_1.STATUS_CODES.INVALID_INPUTS)
                .json({ msg: "User ID or Todo ID not found" });
        const existingTodo = yield prisma.todo.findFirst({
            where: {
                id: todoId,
                userId,
            },
            select: {
                done: true,
            },
        });
        if (!existingTodo)
            return res
                .status(routes_1.STATUS_CODES.INVALID_INPUTS)
                .json({ msg: "Todo not found" });
        const updateTodo = yield prisma.todo.update({
            where: {
                id: todoId,
                userId,
            },
            data: {
                done: !existingTodo.done,
            },
        });
        return res.json({ msg: "Todo updated", data: updateTodo });
    }
    catch (err) {
        return res
            .status(routes_1.STATUS_CODES.INTRENAL_ERROR)
            .json({ msg: routes_1.RESPONSE_MESSAGES.INTRENAL_ERROR });
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = parseInt(req.params.id);
        const userId = req.id;
        if (!userId || !todoId)
            return res
                .status(routes_1.STATUS_CODES.INVALID_INPUTS)
                .json({ msg: "Used or Todo ID not found" });
        const response = yield prisma.todo.delete({
            where: {
                id: todoId,
                userId,
            },
        });
        return res.json({ msg: "Deleted todo successfully", data: response });
    }
    catch (err) {
        return res
            .status(routes_1.STATUS_CODES.INTRENAL_ERROR)
            .json({ msg: routes_1.RESPONSE_MESSAGES.INTRENAL_ERROR });
    }
});
exports.deleteTodo = deleteTodo;
