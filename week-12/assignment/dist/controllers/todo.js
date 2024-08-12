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
exports.addTodo = void 0;
const routes_1 = require("../routes");
const client_1 = require("@prisma/client");
const todo_1 = require("../zod/todo");
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prisma = new client_1.PrismaClient();
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
