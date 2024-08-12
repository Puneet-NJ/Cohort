import express from "express";
import { addTodo } from "../controllers/todo";
import { userAuth } from "../middleware/userAuth";

export const todoRouter = express();

todoRouter.post("/addTodo", userAuth, addTodo);
