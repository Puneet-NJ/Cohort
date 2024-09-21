"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    const todos = [
        { title: "Todo1", description: "This is todo1" },
        { title: "Todo2", description: "This is todo2" },
        { title: "Todo3", description: "This is todo3" },
        { title: "Todo4", description: "This is todo4" },
        { title: "Todo5", description: "This is todo5" },
    ];
    return res.json({ todo: todos[Math.floor(Math.random() * 5)] });
});
app.listen(5001);
