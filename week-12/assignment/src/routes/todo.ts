import express from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo";
import { userAuth } from "../middleware/userAuth";

export const todoRouter = express();

todoRouter.post("/addTodo", userAuth, addTodo);
todoRouter.get("/getTodos", userAuth, getTodos);
todoRouter.put("/updateTodo/:id", userAuth, updateTodo);
todoRouter.delete("/deleteTodo/:id", userAuth, deleteTodo);
