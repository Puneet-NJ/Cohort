import { Hono } from "hono";
import { signin, signup } from "../controller/userController";

export const userRoute = new Hono();

userRoute.post("/signup", signup);
userRoute.post("/signin", signin);
