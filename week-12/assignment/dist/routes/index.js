"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESPONSE_MESSAGES = exports.STATUS_CODES = exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("./user");
const todo_1 = require("./todo");
exports.router = (0, express_1.default)();
var STATUS_CODES;
(function (STATUS_CODES) {
    STATUS_CODES[STATUS_CODES["NOT_FOUND"] = 404] = "NOT_FOUND";
    STATUS_CODES[STATUS_CODES["INVALID_INPUTS"] = 403] = "INVALID_INPUTS";
    STATUS_CODES[STATUS_CODES["INTRENAL_ERROR"] = 500] = "INTRENAL_ERROR";
})(STATUS_CODES || (exports.STATUS_CODES = STATUS_CODES = {}));
var RESPONSE_MESSAGES;
(function (RESPONSE_MESSAGES) {
    RESPONSE_MESSAGES["NOT_FOUND"] = " Not found";
    RESPONSE_MESSAGES["INVALID_INPUTS"] = "Invalid inputs";
    RESPONSE_MESSAGES["INTRENAL_ERROR"] = "Internal server error";
})(RESPONSE_MESSAGES || (exports.RESPONSE_MESSAGES = RESPONSE_MESSAGES = {}));
exports.router.use("/user", user_1.userRouter);
exports.router.use("/todo", todo_1.todoRouter);
