import { Hono } from "hono";
import { signup } from "../controller/userController";

export const userRoute = new Hono();

userRoute.post("/signup", signup);
